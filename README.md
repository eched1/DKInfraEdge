# DKInfraEdge

DKInfraEdge is a React-based web application that presents various IT infrastructure services. It features a home page, dynamic services list and a contact form.

## Features

- Responsive design with Tailwind CSS
- Animated sections powered by Framer Motion
- Helmet integration for SEO
- Axios for API requests
- React Router for navigation
- Contact form built with React Hook Form
- Dynamic services loaded from `public/services.json` with a search box

## Getting Started

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

### Linting and Formatting

```bash
npm run lint     # requires dev dependencies
npm run format
```

## Docker

A sample Dockerfile is included. Build and run the project with:

```bash
docker build -t dkinfraedge .
docker run -p 5173:5173 dkinfraedge
```

## License

MIT
