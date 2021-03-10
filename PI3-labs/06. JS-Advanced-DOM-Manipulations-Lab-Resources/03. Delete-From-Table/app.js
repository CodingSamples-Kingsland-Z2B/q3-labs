function deleteByEmail() {

    // DOM Variable 
    const input = document.querySelector('input[name="email"]');
    const emails = Array.from(document.querySelectorAll('tr>td:last-child'));
    const result = document.getElementById('result');
    // Find the email the user entered in the table emails
    const email = emails.find((email) => email.textContent === input.value);

    if (email) {
        // Matching email
        // 1. Delete the table tr
        email.parentElement.remove();
        // 2. Display the result 'Deleted'
        result.textContent = 'Deleted.';


    } else {
        // Email not found
        result.textContent = 'Not found .';

    }



}