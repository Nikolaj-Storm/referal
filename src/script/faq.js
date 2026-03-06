let activeAccordion = null;

  function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Close any currently open accordion
    if (activeAccordion && activeAccordion !== id) {
      const activeContent = document.getElementById(`content-${activeAccordion}`);
      const activeArrow = document.getElementById(`arrow-${activeAccordion}`);
      activeContent.style.maxHeight = '0px';
      activeArrow.classList.remove('rotate-180');
    }

    // Toggle the clicked accordion
    if (isOpen) {
      content.style.maxHeight = '0px';
      arrow.classList.remove('rotate-180');
      activeAccordion = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // Set to scrollHeight for full expansion
      arrow.classList.add('rotate-180');
      activeAccordion = id;
    }
  }