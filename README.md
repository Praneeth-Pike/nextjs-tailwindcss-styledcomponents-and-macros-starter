# Tailwind CSS with Emotion.js example

This is an example of how you can add [tailwind CSS](https://tailwindcss.com/) with [Emotion.js](https://emotion.sh/docs/introduction) in your web app. It takes inspiration from [examples/with-tailwindcss](https://github.com/vercel/next.js/blob/canary/examples/with-tailwindcss/README.md).

`@tailwindcssinjs/macro` is used to add tailwind classes inside Emotion by injecting the tailwind CSS into the styled component. No need to use CSS files, autoprefix, minifier, etc. You will get the full benefits of Emotion.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss-emotion)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss-emotion with-tailwindcss-emotion-app
# or
yarn create next-app --example with-tailwindcss-emotion with-tailwindcss-emotion-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

The CSS classes generated by Emotion will include the tailwind styles but not the name of the classes. For example the following component:

```jsx
const Header = styled.div`
	${tw`font-mono text-sm text-gray-800`}
`
```

Will be transformed into:

```css
.css-25og8s-Header {
	font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	font-size: 0.875rem;
	color: #2d3748;
}
```

### tailwind CSS config

Use the following command when you add a tailwind plugin that adds to tailwind's base css:

```bash
npm run build:base-css
# or
yarn run build:base-css
```
