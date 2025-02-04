document.getElementById('readmeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value.trim();
    const description = document.getElementById('description').value.trim();
    const headerImage = document.getElementById('headerImage').value.trim();
    const installationLinux = document.getElementById('installationLinux').value.trim();
    const installationWindows = document.getElementById('installationWindows').value.trim();
    const usage = document.getElementById('usage').value.trim();
    const devSetup = document.getElementById('devSetup').value.trim();
    const releaseHistory = document.getElementById('releaseHistory').value.trim();
    const license = document.getElementById('license').value.trim();
    const repoLink = document.getElementById('repoLink').value.trim();
    const author = document.getElementById('author').value.trim();
    const email = document.getElementById('email').value.trim();

    let readme = `# ${projectName}\n> ${description}\n\n`;

    if (headerImage) {
        readme += `![Header Image](${headerImage})\n\n`;
    }

    readme += `## Installation\n\n`;
    if (installationLinux) {
        readme += `### OS X & Linux:\n\`\`\`sh\n${installationLinux}\n\`\`\`\n\n`;
    }
    if (installationWindows) {
        readme += `### Windows:\n\`\`\`sh\n${installationWindows}\n\`\`\`\n\n`;
    }

    if (usage) {
        readme += `## Usage\n\`\`\`sh\n${usage}\n\`\`\`\n\n`;
    }

    if (devSetup) {
        readme += `## Development Setup\n\`\`\`sh\n${devSetup}\n\`\`\`\n\n`;
    }

    if (releaseHistory) {
        readme += `## Release History\n${releaseHistory}\n\n`;
    }

    readme += `## License\n${license || "MIT"}\n\n`;
    readme += `## Contributing\n1. Fork it\n2. Create your feature branch\n3. Commit your changes\n4. Push to the branch\n5. Create a Pull Request\n\n`;
    readme += `## Author\n**${author}** – 📧 ${email}\n[GitHub Repository](${repoLink})\n\n`;

    document.getElementById('output').textContent = readme;
});

document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText(document.getElementById('output').textContent);
    alert('Copied to clipboard! 📋');
});
