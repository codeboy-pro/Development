function createFloatingShape() {
    const shape = document.createElement('div');
    shape.classList.add('floating-shape');
    shape.style.left = Math.random() * 100 + 'vw';
    shape.style.animationDuration = 5 + Math.random() * 5 + 's';

    document.body.appendChild(shape);

    setTimeout(() => {
        shape.remove();
    }, 10000);
}

setInterval(createFloatingShape, 1000);

// Complaint form handling
document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const issue = document.getElementById('issue').value;
    const description = document.getElementById('description').value;

    alert(`Thank you ${name}! Your complaint about "${issue}" in "${location}" has been submitted.`);

    this.reset();
});
