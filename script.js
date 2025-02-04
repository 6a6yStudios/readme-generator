function generateReadme() {
    const title = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const headerImage = document.getElementById("headerImage").value;
    const installationLinux = document.getElementById("installationLinux").value;
    const installationWindows = document.getElementById("installationWindows").value;
    const installationCommand = document.getElementById("installationCommand").value;
    const usage = document.getElementById("usage").value;
    const usageExample = document.getElementById("usageExample").value;
    const techStack = document.getElementById("techStack").value;
    const deploymentCommand = document.getElementById("deploymentCommand").value;
    const usedBy = document.getElementById("usedBy").value;
    const tests = document.getElementById("tests").value;
    const screenshot = document.getElementById("screenshot").value;
    const license = document.getElementById("license").value;
    const author = document.getElementById("author").value;
    const github = document.getElementById("github").value;
    
    let readmeContent = `# ${title}

${description}

${headerImage ? `![Header Image](${headerImage})\n\n` : ""}

## Installation

\`\`\`bash
# OS X & Linux
${installationLinux}

# Windows
${installationWindows}

# General Installation Command
${installationCommand}
\`\`\`

## Usage

${usage}

\`\`\`javascript
${usageExample}
\`\`\`

## Tech Stack
${techStack}

## Deployment
\`\`\`bash
${deploymentCommand}
\`\`\`

## Used By
${usedBy}

## Running Tests
\`\`\`bash
${tests}
\`\`\`

## Screenshots
![Screenshot](${screenshot})

## License
${license}

## Author
- ${author} [GitHub](${github})
`;

    document.getElementById("output").value = readmeContent;
}

function copyToClipboard() {
    document.getElementById("output").select();
    document.execCommand("copy");
    alert("README copied to clipboard!");
}