// This file is intentionally left blank.

document.addEventListener('DOMContentLoaded', function() {
    // Skills input handling
    const skillInput = document.getElementById('skill-input');
    const skillsDisplay = document.getElementById('skills-display');
    
    if (skillInput) {
        skillInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const skill = this.value.trim();
                
                if (skill) {
                    // Create new skill tag
                    const skillTag = document.createElement('span');
                    skillTag.className = 'skill-tag';
                    skillTag.textContent = skill;
                    
                    // Add delete functionality
                    skillTag.addEventListener('click', function() {
                        this.remove();
                    });
                    
                    // Add to display
                    skillsDisplay.appendChild(skillTag);
                    
                    // Clear input
                    this.value = '';
                }
            }
        });
    }
    
    // Add Education button functionality
    const addEducationBtn = document.getElementById('add-education');
    
    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', function() {
            const educationSection = document.getElementById('education');
            const newEducation = document.createElement('div');
            newEducation.className = 'experience-item';
            newEducation.innerHTML = `
                <h3 contenteditable="true">University Name</h3>
                <div class="date" contenteditable="true">20XX - 20XX</div>
                <p><strong>Degree:</strong> <span contenteditable="true">Your Degree</span></p>
                <p><strong>GPA:</strong> <span contenteditable="true">Your GPA</span></p>
                <button class="remove-btn"><i class="fas fa-trash"></i></button>
            `;
            
            // Add before the add button
            educationSection.insertBefore(newEducation, addEducationBtn);
            
            // Add removal functionality
            const removeBtn = newEducation.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                newEducation.remove();
            });
        });
    }
    
    // Add Experience button functionality
    const addExperienceBtn = document.getElementById('add-experience');
    
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', function() {
            const experienceSection = document.getElementById('experience');
            const newExperience = document.createElement('div');
            newExperience.className = 'experience-item';
            newExperience.innerHTML = `
                <h3 contenteditable="true">Company Name</h3>
                <div class="date" contenteditable="true">Start Date - End Date</div>
                <p><strong>Position:</strong> <span contenteditable="true">Your Position</span></p>
                <p contenteditable="true">Description of your responsibilities and achievements in this role...</p>
                <button class="remove-btn"><i class="fas fa-trash"></i></button>
            `;
            
            // Add before the add button
            experienceSection.insertBefore(newExperience, addExperienceBtn);
            
            // Add removal functionality
            const removeBtn = newExperience.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                newExperience.remove();
            });
        });
    }
    
    // Add Certification button functionality
    const addCertBtn = document.getElementById('add-certification');
    
    if (addCertBtn) {
        addCertBtn.addEventListener('click', function() {
            const certSection = document.getElementById('certifications');
            const newCert = document.createElement('div');
            newCert.className = 'experience-item';
            newCert.innerHTML = `
                <h3 contenteditable="true">Certification Name</h3>
                <div class="date" contenteditable="true">Issued: Month Year</div>
                <p contenteditable="true">Issuing Organization</p>
                <button class="remove-btn"><i class="fas fa-trash"></i></button>
            `;
            
            // Add before the add button
            certSection.insertBefore(newCert, addCertBtn);
            
            // Add removal functionality
            const removeBtn = newCert.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                newCert.remove();
            });
        });
    }
    
    // Generate PDF functionality (basic - redirects to a download)
    const generatePdfBtn = document.getElementById('generate-cv');
    
    if (generatePdfBtn) {
        generatePdfBtn.addEventListener('click', function() {
            // Basic alert - in a real application, this would use a library like html2pdf.js
            alert('In a real application, this would generate a PDF of your CV. For this demo, we\'ll just show this message.');
            // Example of what full implementation might look like:
            // html2pdf().from(document.body).save('my-cv.pdf');
        });
    }
    
    // Add remove buttons to existing items
    document.querySelectorAll('.experience-item').forEach(item => {
        if (!item.querySelector('.remove-btn')) {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
            removeBtn.addEventListener('click', function() {
                item.remove();
            });
            item.appendChild(removeBtn);
        }
    });
    
    // Make existing items editable
    document.querySelectorAll('.experience-item h3, .experience-item .date, .experience-item p').forEach(element => {
        element.setAttribute('contenteditable', 'true');
    });
    
    // Add styling for remove buttons
    const style = document.createElement('style');
    style.textContent = `
        .remove-btn {
            background: transparent;
            color: #e74c3c;
            border: none;
            padding: 5px;
            cursor: pointer;
            float: right;
            margin-top: -40px;
            transition: all 0.3s;
        }
        .remove-btn:hover {
            color: #c0392b;
            transform: scale(1.2);
        }
        [contenteditable="true"]:hover {
            background: rgba(52, 152, 219, 0.1);
            outline: 1px dashed var(--primary-color);
            padding: 2px;
        }
        [contenteditable="true"]:focus {
            outline: 2px solid var(--primary-color);
            background: white;
            padding: 2px;
        }
    `;
    document.head.appendChild(style);
});