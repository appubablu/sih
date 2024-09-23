<script>
    // Function to simulate fall detection
    function simulateFall() {
        const alertMessage = document.getElementById('alert-message');
        const fallStatus = document.getElementById('fall-status');
        const button = document.getElementById('manual-check-button');

        // Simulate a fall detected
        alertMessage.textContent = "Fall detected! Immediate attention needed.";
        fallStatus.textContent = "Fall detected!";
        fallStatus.className = "fall-detected";
        
        // Disable the button for a few seconds
        button.disabled = true;
        setTimeout(() => {
            // Reset the state after 5 seconds
            alertMessage.textContent = "Monitoring for falls...";
            fallStatus.textContent = "No fall detected";
            fallStatus.className = "no-fall";
            button.disabled = false;
        }, 5000);
    }
</script>

</body>
</html>