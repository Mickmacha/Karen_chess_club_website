# Agent Instructions for Karen Chess Club Website

This directory contains customized instructions and prompts for AI assistants working on the Karen Chess Club website project.

## File Structure

### Workspace Instructions
- **`copilot-instructions.md`** - Main project architecture and development guidelines
  - Project overview and tech stack
  - Component architecture and patterns
  - Coding standards and conventions
  - Data fetching and routing guidelines
  - Performance, SEO, and deployment practices

### File-Specific Instructions
Located in `.github/instructions/`:

- **`components.instructions.md`** - React component development standards
  - Component structure and naming
  - Styling guidelines and patterns
  - Accessibility and performance best practices
  - Chess theme integration

- **`schemas.instructions.md`** - Sanity CMS schema development guidelines
  - Content modeling principles
  - Schema structure and field patterns
  - Validation rules and best practices
  - Migration and maintenance guidelines

### Prompts
Located in `.github/prompts/`:

- **`tasks.prompt.md`** - Quick prompts for common development tasks
  - Component creation templates
  - Schema development prompts
  - Page creation workflows
  - Testing and optimization tasks

## Usage

These instruction files are automatically loaded by AI assistants based on:

- **File patterns** in `applyTo` frontmatter
- **Context** of the current file being edited
- **User queries** matching the descriptions

## Contributing

When adding new instruction files:

1. Use proper YAML frontmatter with `description` and `applyTo` fields
2. Follow the established naming conventions
3. Include comprehensive examples and patterns
4. Test the instructions with actual development tasks
5. Update this README when adding new files

## Project Context

- **Framework**: Next.js 15 with React 19 and TypeScript
- **CMS**: Sanity.io v4 for content management
- **Styling**: Tailwind CSS with custom chess-themed design
- **Deployment**: Vercel with monorepo configuration
- **Purpose**: Modern website for Karen Chess Club in Nairobi, Kenya

For more details, see the main `copilot-instructions.md` file.