## Note: this is NOT the current SNZ website! The current SNZ website can be viewed at [https://speedcubing.nz/](https://speedcubing.nz/).

## Project Structure
<pre>
<b>snz-new</b>
├── docs
|    ├── README.md    <b>Project README</b>
├── images <b>Various images</b>
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   ├── assets 		<b> (icons, logos, etc) </b>
│   │   │   ├── ...
│   │   ├── components 		<b> (custom svelte components, eg buttons, forms etc) </b>
│   │   │   ├── ...
│   │   ├── data 		<b> (convenient data to work with backend) </b>
│   │   │   ├── ...
│   │   ├── db 		        <b> (Kysely configuration and files) </b>
│   │   │   ├── ...
│   │   ├── prisma.ts 		<b> (initialises the prisma client) </b>
│   │   ├── utils.ts 	        <b> (universal utility functions) </b>
│   │   └── utilsServer.ts 	<b> (server utility functions) </b>
│   ├── routes
│   │   ├── (admin) 		<b> (protected admin routes, dashboard) </b>
│   │   │   ├── dashboard
│   │   │   │   ├── ...
│   │   ├── (app) 		<b> (the primary app, inherits root layout with tab bar) </b>
│   │   │   ├── ...
│   │   └── (auth) 		<b> (login, signup, recover-account and logout routes) </b>
│   │       ├── ...
│   └── styles 			<b> (all styles used throughout the app, imported by root layout + grouped layouts) </b>
│       ├── components.css 	 ├── (for components, eg tables, inputs etc)
│       └── globals.css 	 └── (defines global css variables, sets colours, fonts, etc)
└── static			<b> (static resources, favicon, landing page assets) </b>
</b></pre>
