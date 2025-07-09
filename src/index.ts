#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import OpenAI from "openai";
import { z } from "zod";

const openai = new OpenAI();

// Create an MCP server
const server = new McpServer(
  {
    name: "Image Recongnition",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {
        list: true,
        call: true,
      },
    },
  }
);

server.registerTool(
  "describe-image",
  {
    title: "Describe Image",
    description: "Describe an image by URL",
    inputSchema: {
      imageUrl: z.string().describe("The image url to describe"),
    },
  },
  async ({ imageUrl }: { imageUrl: string }) => {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: "what's in this image?" },
            {
              detail: "high",
              type: "input_image",
              image_url: imageUrl,
            },
          ],
        },
      ],
    });
    return {
      content: [{ type: "text", text: response.output_text }],
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
