// document.addEventListener('DOMContentLoaded', function () {
//     const checkboxBox = document.getElementById('checkboxBox');
//     const title = document.getElementById('title');
//     const circle = document.getElementById('circle');
//     const spinner = document.getElementById('spinner');
//     const check = document.getElementById('check');
//     const taskParagraph = document.getElementById('taskParagraph');
//     const taskButton = document.getElementById('taskButton');
//     const taskImage = document.getElementById('taskImage');

//     function toggleIcon() {
//         // Toggle the state
//         const isChecked = !checkboxBox.classList.contains('checked');

//         // Update the class to reflect the state
//         checkboxBox.classList.toggle('checked', isChecked);

//         // Reset the state
//         circle.style.display = 'block';
//         spinner.style.display = 'none';
//         check.style.display = 'none';
//         taskButton.style.display = "block"
//         taskParagraph.style.display = "block"
//         taskImage.style.display = "block"

//         // Trigger the animation
//         setTimeout(function () {
//             circle.style.display = 'none';
//             spinner.style.display = 'block';

//             setTimeout(function () {
//                 spinner.style.display = 'none';

//                 // Check if it should show the check or circle
//                 if (isChecked) {
//                     check.style.display = 'block';
//                     taskButton.style.display = "none"
//                     taskParagraph.style.display = "none"
//                     taskImage.style.display = "none"
//                 } else {
//                     circle.style.display = 'block';
//                 }
//             }, 700); // Adjusted to match the animation duration
//         }, 50); // Small delay before starting the animation
//     }

//     // Apply the same event handler to multiple elements
//     checkboxBox.addEventListener('click', toggleIcon);
//     title.addEventListener('click', toggleIcon);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const tasks = document.querySelectorAll('.tasks');

//     function toggleIcon(task) {
//         const checkboxBox = task.querySelector('.checkbox-box');
//         const circle = task.querySelector('#circle');
//         const spinner = task.querySelector('#spinner');
//         const check = task.querySelector('#check');
//         const taskButton = task.querySelector('#taskButton');
//         const taskParagraph = task.querySelector('#taskParagraph');
//         const taskImage = task.querySelector('#taskImage');

//         const isChecked = !checkboxBox.classList.contains('checked');
//         checkboxBox.classList.toggle('checked', isChecked);

//         circle.style.display = 'block';
//         spinner.style.display = 'none';
//         check.style.display = 'none';
//         taskButton.style.display = 'block';
//         taskParagraph.style.display = 'block';
//         taskImage.style.display = 'block';

//         setTimeout(function () {
//             circle.style.display = 'none';
//             spinner.style.display = 'block';

//             setTimeout(function () {
//                 spinner.style.display = 'none';

//                 if (isChecked) {
//                     check.style.display = 'block';
//                     taskButton.style.display = 'none';
//                     taskParagraph.style.display = 'none';
//                     taskImage.style.display = 'none';
//                 } else {
//                     circle.style.display = 'block';
//                 }
//             }, 700);
//         }, 50);
//     }

//     tasks.forEach(function (task) {
//         task.addEventListener('click', function () {
//             toggleIcon(task);
//             // Close other tasks
//             tasks.forEach(function (otherTask) {
//                 if (otherTask !== task) {
//                     const checkboxBox = otherTask.querySelector('.checkbox-box');
//                     checkboxBox.classList.remove('checked');
//                     const circle = otherTask.querySelector('#circle');
//                     circle.style.display = 'block';
//                     const spinner = otherTask.querySelector('#spinner');
//                     spinner.style.display = 'none';
//                     const check = otherTask.querySelector('#check');
//                     check.style.display = 'none';
//                     const taskButton = otherTask.querySelector('#taskButton');
//                     taskButton.style.display = 'block';
//                     const taskParagraph = otherTask.querySelector('#taskParagraph');
//                     taskParagraph.style.display = 'block';
//                     const taskImage = otherTask.querySelector('#taskImage');
//                     taskImage.style.display = 'block';
//                 }
//             });
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const tasks = document.querySelectorAll('.tasks');

//     tasks.forEach((task, index) => {
//         const checkboxBox = task.querySelector('.checkbox-box');
//         const circle = task.querySelector('.circle');
//         const spinner = task.querySelector('.spinner');
//         const check = task.querySelector('.check');
//         const taskParagraph = task.querySelector('.taskParagraph');
//         const taskButton = task.querySelector('.taskButton');
//         const taskImage = task.querySelector('.taskImage');

//         let isOpen = false;

//         function closeOtherTasks() {
//             tasks.forEach((otherTask, otherIndex) => {
//                 if (otherIndex !== index) {
//                     const otherCheckboxBox = otherTask.querySelector('.checkbox-box');
//                     const otherCircle = otherTask.querySelector('.circle');
//                     const otherSpinner = otherTask.querySelector('.spinner');
//                     const otherCheck = otherTask.querySelector('.check');
//                     const otherTaskParagraph = otherTask.querySelector('.taskParagraph');
//                     const otherTaskButton = otherTask.querySelector('.taskButton');
//                     const otherTaskImage = otherTask.querySelector('.taskImage');

//                     otherCheckboxBox.classList.remove('checked');
//                     otherCircle.style.display = 'block';
//                     otherSpinner.style.display = 'none';
//                     otherCheck.style.display = 'none';
//                     otherTaskButton.style.display = 'none';
//                     otherTaskParagraph.style.display = 'none';
//                     otherTaskImage.style.display = 'none';
//                 }
//             });
//         }

//         // Initial state
//         circle.style.display = 'block';
//         spinner.style.display = 'none';
//         check.style.display = 'none';
//         taskButton.style.display = 'none';
//         taskParagraph.style.display = 'none';
//         taskImage.style.display = 'none';

//         checkboxBox.addEventListener('click', function () {
//             const isChecked = !checkboxBox.classList.contains('checked');

//             checkboxBox.classList.toggle('checked', isChecked);

//             if (!isOpen) {
//                 closeOtherTasks();
//             }

//             isOpen = !isOpen;

//             circle.style.display = isChecked ? 'none' : 'block';
//             spinner.style.display = isChecked ? 'none' : 'block';
//             check.style.display = isChecked ? 'block' : 'none';
//             taskButton.style.display = isChecked ? 'none' : 'block';
//             taskParagraph.style.display = isChecked ? 'none' : 'block';
//             taskImage.style.display = isChecked ? 'none' : 'block';
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxBoxes = document.querySelectorAll(".tasks");

//     checkboxBoxes.forEach((task) => {
//         let isChecked = false;
//         const circle = task.querySelector(".circle");
//         const spinner = task.querySelector(".spinner");
//         const check = task.querySelector(".check");
//         const checkboxBox = task.querySelector(".checkbox-box");

//         // Initially hide the check icon and spinner
//         check.style.display = "none";
//         spinner.style.display = "none";

//         checkboxBox.addEventListener("click", function () {
//             if (isChecked) {
//                 // If checked, uncheck and show circle
//                 circle.style.display = "block";
//                 spinner.style.display = "none";
//                 check.style.display = "none";
//             } else {
//                 // If unchecked, check and show spinner
//                 circle.style.display = "none";
//                 spinner.style.display = "block";
//                 check.style.display = "none";

//                 // Add spin class for spinner animation
//                 spinner.classList.add("spin");

//                 // Simulate spinner-to-check transition
//                 setTimeout(() => {
//                     spinner.style.display = "none";
//                     check.style.display = "block";
//                     // Remove spin class after the transition
//                     spinner.classList.remove("spin");
//                 }, 700);
//             }

//             isChecked = !isChecked;
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxBoxes = document.querySelectorAll(".tasks");

//     checkboxBoxes.forEach((task) => {
//       let isChecked = false;
//       const circle = task.querySelector(".circle");
//       const spinner = task.querySelector(".spinner");
//       const check = task.querySelector(".check");
//       const checkboxBox = task.querySelector(".checkbox-box");
//       const title = task.querySelector(".title");
//       const taskParagraph = task.querySelector(".taskParagraph");
//       const taskButton = task.querySelector(".taskButton");
//       const taskImage = task.querySelector(".taskImage");

//       // Initially hide the check icon and spinner
//       check.style.display = "none";
//       spinner.style.display = "none";

//       checkboxBox.addEventListener("click", function () {
//         if (isChecked) {
//           // If checked, uncheck and show circle
//           circle.style.display = "block";
//           spinner.style.display = "none";
//           check.style.display = "none";
//         } else {
//           // If unchecked, check and show spinner
//           circle.style.display = "none";
//           spinner.style.display = "block";
//           check.style.display = "none";

//           // Add spin class for spinner animation
//           spinner.classList.add("spin");

//           // Simulate spinner-to-check transition
//           setTimeout(() => {
//             spinner.style.display = "none";
//             check.style.display = "block";
//             // Remove spin class after the transition
//             spinner.classList.remove("spin");
//           }, 700);
//         }

//         isChecked = !isChecked;
//       });

//       // Add event listener to the title
//       title.addEventListener("click", function () {
//         // Toggle the 'hidden' class for the related elements
//         taskParagraph.classList.toggle("hidden");
//         taskButton.classList.toggle("hidden");
//         taskImage.classList.toggle("hidden");
//       });
//     });
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxBoxes = document.querySelectorAll(".tasks");

//     checkboxBoxes.forEach((task) => {
//       let isChecked = false;
//       const circle = task.querySelector(".circle");
//       const spinner = task.querySelector(".spinner");
//       const check = task.querySelector(".check");
//       const checkboxBox = task.querySelector(".checkbox-box");
//       const title = task.querySelector(".title");
//       const taskParagraph = task.querySelector(".taskParagraph");
//       const taskButton = task.querySelector(".taskButton");
//       const taskImage = task.querySelector(".taskImage");

//       // Initially hide the check icon and spinner
//       check.style.display = "none";
//       spinner.style.display = "none";

//       checkboxBox.addEventListener("click", function () {
//         if (isChecked) {
//           // If checked, uncheck and show circle
//           circle.style.display = "block";
//           spinner.style.display = "none";
//           check.style.display = "none";
//         } else {
//           // If unchecked, check and show spinner
//           circle.style.display = "none";
//           spinner.style.display = "block";
//           check.style.display = "none";

//           // Add spin class for spinner animation
//           spinner.classList.add("spin");

//           // Simulate spinner-to-check transition
//           setTimeout(() => {
//             spinner.style.display = "none";
//             check.style.display = "block";
//             // Remove spin class after the transition
//             spinner.classList.remove("spin");
//           }, 700);
//         }

//         isChecked = !isChecked;
//       });

//       // Add event listener to the title
//       title.addEventListener("click", function () {
//         taskParagraph.classList.toggle("hidden");
//         taskButton.classList.toggle("hidden");
//         taskImage.classList.toggle("hidden");
//       });
//     });
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     const checkboxBoxes = document.querySelectorAll(".tasks");

//     checkboxBoxes.forEach((task) => {
//         let isChecked = false;
//         const circle = task.querySelector(".circle");
//         const spinner = task.querySelector(".spinner");
//         const check = task.querySelector(".check");
//         const title = task.querySelector(".title");
//         const taskParagraph = task.querySelector(".taskParagraph");
//         const taskButton = task.querySelector(".taskButton");
//         const taskImage = task.querySelector(".taskImage");

//         // Initially hide the check icon and other elements
//         check.style.display = "none";
//         taskParagraph.classList.add("hidden");
//         taskButton.classList.add("hidden");
//         taskImage.classList.add("hidden");

//         title.addEventListener("click", function () {
//             // Toggle visibility of other elements on title click
//             taskParagraph.classList.toggle("hidden");
//             taskButton.classList.toggle("hidden");
//             taskImage.classList.toggle("hidden");

//             // Close other open tasks
//             checkboxBoxes.forEach((otherTask) => {
//                 const otherTitle = otherTask.querySelector(".title");
//                 const otherTaskParagraph = otherTask.querySelector(".taskParagraph");
//                 const otherTaskButton = otherTask.querySelector(".taskButton");
//                 const otherTaskImage = otherTask.querySelector(".taskImage");

//                 if (otherTask !== task) {
//                     otherTaskParagraph.classList.add("hidden");
//                     otherTaskButton.classList.add("hidden");
//                     otherTaskImage.classList.add("hidden");
//                 }
//             });
//         });

//         circle.addEventListener("click", function () {
//             // If unchecked, check and show spinner
//             circle.style.display = "none";
//             spinner.style.display = "block";
//             check.style.display = "none";

//             // Add spin class for spinner animation
//             spinner.classList.add("spin");

//             // Simulate spinner-to-check transition
//             setTimeout(() => {
//                 spinner.style.display = "none";
//                 check.style.display = "block";
//                 // Remove spin class after the transition
//                 spinner.classList.remove("spin");
//             }, 700);

//             isChecked = true;
//         });

//         check.addEventListener("click", function () {
//             // If checked, uncheck and show circle
//             circle.style.display = "block";
//             spinner.style.display = "none";
//             check.style.display = "none";

//             isChecked = false;
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const count = document.querySelector(".count");
//     const taskRangeInput = document.getElementById("taskRange");
//     const dropdownToggle1 = document.querySelector(".dropdown-toggleUp");
//     const dropdownToggle2 = document.querySelector(".dropdown-toggleDown");
//     const checkboxBoxes = document.querySelectorAll(".tasks");
//     const taskContainer = document.querySelector(".taskContainer");
//     let checkedTasksCount = 0; // Counter for checked tasks

//     //Toggle the who tasks to show and off when the chevron icon is clicked
//     dropdownToggle2.style.display = "none";
//     dropdownToggle1.addEventListener("click", function() {
//         taskContainer.classList.toggle("hidden");
//         dropdownToggle1.style.display = "none"
//         dropdownToggle2.style.display = "block"
//         console.log("cx")
//     })
//     dropdownToggle2.addEventListener("click", function() {
//         taskContainer.classList.toggle("hidden");
//         dropdownToggle2.style.display = "none"
//         dropdownToggle1.style.display = "block"
//         console.log("cx")
//     })

//     checkboxBoxes.forEach((task) => {
//         let isChecked = false;
//         const circle = task.querySelector(".circle");
//         const spinner = task.querySelector(".spinner");
//         const check = task.querySelector(".check");
//         const title = task.querySelector(".title");
//         const taskParagraph = task.querySelector(".taskParagraph");
//         const taskButton = task.querySelector(".taskButton");
//         const taskImage = task.querySelector(".taskImage");

//         // Initially hide the check icon and other elements
//         check.style.display = "none";
//         taskParagraph.classList.add("hidden");
//         taskButton.classList.add("hidden");
//         taskImage.classList.add("hidden");

//         title.addEventListener("click", function () {
//             // Toggle visibility of other elements on title click
//             taskParagraph.classList.toggle("hidden");
//             taskButton.classList.toggle("hidden");
//             taskImage.classList.toggle("hidden");

//             // Change background color of the task when opened
//             task.style.backgroundColor = taskParagraph.classList.contains("hidden") ? "" : "#f2f2f2";

//             // Close other open tasks
//             checkboxBoxes.forEach((otherTask) => {
//                 const otherTitle = otherTask.querySelector(".title");
//                 const otherTaskParagraph = otherTask.querySelector(".taskParagraph");
//                 const otherTaskButton = otherTask.querySelector(".taskButton");
//                 const otherTaskImage = otherTask.querySelector(".taskImage");

//                 if (otherTask !== task) {
//                     otherTaskParagraph.classList.add("hidden");
//                     otherTaskButton.classList.add("hidden");
//                     otherTaskImage.classList.add("hidden");

//                     // Reset background color of other tasks
//                     otherTask.style.backgroundColor = "";
//                 }
//             });
//         });

//         circle.addEventListener("click", function () {
//             // If unchecked, check and show spinner
//             circle.style.display = "none";
//             spinner.style.display = "block";
//             check.style.display = "none";

//             // Add spin class for spinner animation
//             spinner.classList.add("spin");

//             // Simulate spinner-to-check transition
//             setTimeout(() => {
//                 spinner.style.display = "none";
//                 check.style.display = "block";
//                 // Remove spin class after the transition
//                 spinner.classList.remove("spin");

//                 // Increment or decrement the checkedTasksCount
//                 isChecked ? checkedTasksCount-- : checkedTasksCount++;
//                 console.log("Checked Tasks: " + checkedTasksCount);
//                 console.log(checkedTasksCount);
//                 count.textContent = checkedTasksCount;
//                 taskRangeInput.value = checkedTasksCount;

//                 isChecked = !isChecked;
//             }, 700);
//         });

//         check.addEventListener("click", function () {
//             // If checked, uncheck and show circle
//             circle.style.display = "block";
//             spinner.style.display = "none";
//             check.style.display = "none";

//             // Decrement the checkedTasksCount
//             checkedTasksCount--;
//             console.log("Checked Tasks: " + checkedTasksCount);
//             console.log(checkedTasksCount);
//             count.textContent = checkedTasksCount;
//             taskRangeInput.value = checkedTasksCount;

//             isChecked = false;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const count = document.querySelector(".count");
    const taskRangeInput = document.getElementById("taskRange");
    const dropdownToggle1 = document.querySelector(".dropdown-toggleUp");
    const dropdownToggle2 = document.querySelector(".dropdown-toggleDown");
    const checkboxBoxes = document.querySelectorAll(".tasks");
    const taskContainer = document.querySelector(".taskContainer");
    const optionMenuToggle = document.querySelector(".name-abbrBox");
    const optionMenu = document.querySelector(".option-menu");
    let checkedTasksCount = 0; // Counter for checked tasks

    // Toggle the option menu
    // optionMenu.style.display = "none";
    // Toggle the whole tasks to show and off when the chevron icon is clicked
    dropdownToggle2.style.display = "none";
    dropdownToggle1.addEventListener("click", function () {
        taskContainer.classList.toggle("hidden");
        dropdownToggle1.style.display = "none";
        dropdownToggle2.style.display = "block";
        console.log("cx");
    });
    dropdownToggle2.addEventListener("click", function () {
        taskContainer.classList.toggle("hidden");
        dropdownToggle2.style.display = "none";
        dropdownToggle1.style.display = "block";
        console.log("cx");
    });
    optionMenuToggle.addEventListener("click", function () {
        console.log("hq");
    optionMenu.style.display = "block";
        optionMenu.classList.toggle("hidden")
    });
    checkboxBoxes.forEach((task, index) => {
        let isChecked = false;
        const circle = task.querySelector(".circle");
        const spinner = task.querySelector(".spinner");
        const check = task.querySelector(".check");
        const title = task.querySelector(".title");
        const taskParagraph = task.querySelector(".taskParagraph");
        const taskButton = task.querySelector(".taskButton");
        const taskImage = task.querySelector(".taskImage");

        // Initially hide the check icon and other elements
        check.style.display = "none";
        taskParagraph.classList.add("hidden");
        taskButton.classList.add("hidden");
        taskImage.classList.add("hidden");

        title.addEventListener("click", function () {
            // Toggle visibility of other elements on title click
            taskParagraph.classList.toggle("hidden");
            taskButton.classList.toggle("hidden");
            taskImage.classList.toggle("hidden");

            // Change background color of the task when opened
            task.style.backgroundColor = taskParagraph.classList.contains(
                "hidden"
            )
                ? ""
                : "#f2f2f2";

            // Close other open tasks
            checkboxBoxes.forEach((otherTask, otherIndex) => {
                const otherTitle = otherTask.querySelector(".title");
                const otherTaskParagraph =
                    otherTask.querySelector(".taskParagraph");
                const otherTaskButton = otherTask.querySelector(".taskButton");
                const otherTaskImage = otherTask.querySelector(".taskImage");

                if (otherTask !== task) {
                    otherTaskParagraph.classList.add("hidden");
                    otherTaskButton.classList.add("hidden");
                    otherTaskImage.classList.add("hidden");

                    // Reset background color of other tasks
                    otherTask.style.backgroundColor = "";
                }
            });
        });

        circle.addEventListener("click", function () {
            // If unchecked, check and show spinner
            circle.style.display = "none";
            spinner.style.display = "block";
            check.style.display = "none";

            // Add spin class for spinner animation
            spinner.classList.add("spin");

            // Simulate spinner-to-check transition
            setTimeout(() => {
                spinner.style.display = "none";
                check.style.display = "block";
                // Remove spin class after the transition
                spinner.classList.remove("spin");

                // Increment or decrement the checkedTasksCount
                isChecked ? checkedTasksCount-- : checkedTasksCount++;
                console.log("Checked Tasks: " + checkedTasksCount);
                console.log(checkedTasksCount);
                count.textContent = checkedTasksCount;
                taskRangeInput.value = checkedTasksCount;

                isChecked = !isChecked;
            }, 700);
        });

        check.addEventListener("click", function () {
            // If checked, uncheck and show circle
            circle.style.display = "block";
            spinner.style.display = "none";
            check.style.display = "none";

            // Decrement the checkedTasksCount
            checkedTasksCount--;
            console.log("Checked Tasks: " + checkedTasksCount);
            console.log(checkedTasksCount);
            count.textContent = checkedTasksCount;
            taskRangeInput.value = checkedTasksCount;

            isChecked = false;
        });

        // Open the first task by default
        if (index === 0) {
            title.click();
        }
    });
});
