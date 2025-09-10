# Image Recognition MCP Server

A Model Context Protocol (MCP) server that provides AI-powered image recognition and description capabilities using OpenAI's vision models.

## Overview

This MCP server enables AI assistants to analyze and describe images through a simple URL-based interface. It leverages OpenAI's powerful vision models to provide detailed descriptions of images, making it easy to integrate image analysis capabilities into your AI workflows.

## Features

- **Image Analysis**: Analyze images from URLs and get detailed descriptions
- **OpenAI Integration**: Uses OpenAI's latest vision models for accurate image recognition
- **MCP Protocol**: Fully compatible with the Model Context Protocol standard
- **TypeScript**: Built with TypeScript for type safety and better development experience
- **Simple API**: Easy-to-use interface for image description requests

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key

### MCP Client Configuration

To use this server with an MCP client, add the following configuration:

```json
{
  "mcpServers": {
    "image-recognition": {
      "command": "npx",
      "args": ["-y", "@mcp-s/image-recognition-mcp"],
      "env": {
        "OPENAI_API_KEY": "your-actual-openai-api-key-here"
      }
    }
  }
}
```

**⚠️ IMPORTANT:** The `env` section with your OpenAI API key is required - this is the only way the MCP server can function.

## Usage

### Available Tools

#### `describe-image`

Analyzes an image from a URL and provides a detailed description.

**Parameters:**

- `imageUrl` (string): The URL of the image to analyze

**Example:**

```json
{
  "tool": "describe-image",
  "arguments": {
    "imageUrl": "https://example.com/image.jpg"
  }
}
```

**Response:**

```json
{
  "content": [
    {
      "type": "text",
      "text": "The image shows a beautiful sunset over a mountain landscape with vibrant orange and pink colors in the sky..."
    }
  ]
}
```

### Integration with AI Assistants

This MCP server can be integrated with various AI assistants that support the MCP protocol, such as:

- Claude Desktop
- Other MCP-compatible AI systems

## Development

### Project Structure

```
image-recognition-mcp/
├── src/
│   └── index.ts          # Main server implementation
├── dist/                 # Compiled JavaScript output
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

### Error Handling

The server includes robust error handling for:

- Invalid image URLs
- Network connectivity issues
- OpenAI API errors
- Invalid input parameters

## Troubleshooting

### Common Issues

**Server fails to start or doesn't work:**

- ✅ **Check if OpenAI API key is set**: This is the #1 cause of issues
  ```bash
  echo $OPENAI_API_KEY  # Should show your API key
  ```
- ✅ **Verify API key is valid**: Test with OpenAI's API directly
- ✅ **Check API key has sufficient credits**: Ensure your OpenAI account has available credits

**"Authentication failed" errors:**

- The OpenAI API key is missing or invalid
- Set the environment variable: `export OPENAI_API_KEY="your-key"`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainer.
