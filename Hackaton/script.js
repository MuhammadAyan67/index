document.getElementById('resumeform')?.addEventListener("submit", function (event) {
    event.preventDefault()
}



,function generateResume() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const user = usernameElement.value
    const unique=   `resume/${usernameElement.replace(/\s+/g, '_')}_cv.html`

    const resumeOutput = document.getElementById("resume-output");
n

    const usernameElement

    resumeOutput.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const downloadlink = document.createElement('a')
    downloadLink.href = 'data:texthtml;charset=utf-8'
} )
