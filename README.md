# vdss

This is the public repository for our VDSS Storytelling project.

**Goal**:

> Creating a data-driven storytelling website

## Project Structure

```text
.
├── data-report                 # data-report folder
│   ├── _quarto.yml             # quarto config file
│   ├── data-report.qmd         # quarto markdown file
│   ├── README.md               # data-report README
│   ├── requirements.txt        # python requirements
│   └── ...
├── assets                      # assets folder
├── css                         # css folder
├── js                          # js folder for charting
├── index.html                  # index page
├── index.js                    # index js file
├── LICENSE                     # GPL v3.0 License
├── package.json                # node modules
├── package-lock.json           # node modules lock
├── README.md                   # this file
└── ...
```

## Dev Setup

> Note: for the `data-report` setup, see the [README](data-report/README.md) in the `data-report` folder.

### Dependencies

-   Node.js >= v18.12.1
-   Node Modules (see [package.json](package.json)
    -   fullpage.js == 4.0.19
    -   font-awesome-free == 6.4.0

Development dependencies:

-   Node Modules (see [package.json](package.json)
    -   live-server == 1.2.2

**Node Modules Installation**

```bash
npm install
```

## License

This project is licensed under the GPL v3.0 License - see the [LICENSE](LICENSE) file for details
