document.addEventListener('DOMContentLoaded', () => {
    const modals = [
        {
            modal: document.getElementById('modal'),
            openButton: document.getElementById('openModal'),
            closeButton: document.getElementById('closeModal'),
            overlay: document.getElementById('overlay3'),
            video: document.getElementById('video1'), // Assuming video ID is 'video1' inside modal
        },
        {
            modal: document.getElementById('modal2'),
            openButton: document.getElementById('openModal2'),
            closeButton: document.getElementById('closeModal2'),
            overlay: document.getElementById('overlay4'),
            video: document.getElementById('video2'), // Assuming video ID is 'video2' inside modal
        },
    ];

    modals.forEach(({ modal, openButton, closeButton, overlay, video }) => {
        // Show the modal and freeze background
        openButton.addEventListener('click', () => {
            modal.classList.remove('hidden'); // Show the modal
            overlay.classList.add('show'); // Show the overlay
            document.body.classList.add('overflow-hidden'); // Freeze background
        });

        // Hide the modal and unfreeze background
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden'); // Hide the modal
            overlay.classList.remove('show'); // Hide the overlay
            document.body.classList.remove('overflow-hidden'); // Unfreeze background
            if (video) {
                video.pause(); // Pause the video when modal is closed
            }
        });

        // Close modal when clicking outside the content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hidden'); // Hide the modal
                overlay.classList.remove('show'); // Hide the overlay
                document.body.classList.remove('overflow-hidden'); // Unfreeze background
                console.log(video);
                if (video) {
                    video.pause(); // Pause the video when modal is closed
                }
            }
        });
    });
});
