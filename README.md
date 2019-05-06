We are using react-redux@next. There is currently an open PR for adding hooks support to DefinitelyTyped here: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/34913

Until that PR is merged you will need to paste the following code in place of node_modules/@types/react-redux/index.d.ts: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/90ce6a671fe6f079e73a884c9425833cdbc23fa6/types/react-redux/index.d.ts
