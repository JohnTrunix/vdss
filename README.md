# vdss

This is the public repository for our VDSS Storytelling project:

> Creating a data-driven storytelling website

## Folder Structure

```text
vdss/
├── assets/                 # static assets & logos
├── css/                    # stylesheets
├── data/
│   ├── 01_raw/             # raw data
│   ├── 02_processed/       # processed data
│   └── 03_output/          # output data for charts
├── docs/
│   ├── _quarto.yml         # quarto configuration
│   ├── datareport.qmd      # quarto md datareport
│   ├── personas.pdf        # personas
│   └── requirements.txt    # quarto build requirements
├── js/                     # js files for charts & utils
├── node_modules/           # node modules
├── .gitignore
├── index.html              # index file for website
├── index.js                # index js file for website
├── LICENSE                 # license file
├── package-lock.json       # package lock file
├── package.json            # package file
└── README.md               # this file
```

## Dev Setup

After cloning the repository, run the following commands to install the dependencies:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev
```

> See more `npm run [...]` commands in the [package.json](package.json) file.

## License

This project is licensed under the GPL v3.0 License - see the [LICENSE](LICENSE) file for details
