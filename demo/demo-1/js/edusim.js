const EduSim = (function init() {
    // --- CACHE DOM ---
    const $summaryWrapper = document.getElementById('details-content');
    const $canvas = document.getElementById('canvas');

    // --- ATTRIBUTES ---
    const ctx = $canvas.getContext('2d');
    let hotspots = [{x:512.1774,y:277.7419,z:608.4355,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:608.4355,y:277.7419,z:608.4355,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:644.4355,y:277.7419,z:740.6935,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:740.6935,y:277.7419,z:740.6935,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:776.6935,y:277.7419,z:776.6935,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:776.6935,y:277.7419,z:776.6935,q:376.9354,radius:36, img:'images/wire.png',componentName:'n/a'},{x:740.6935,y:376.9354,z:740.6935,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:740.6935,y:443.0644,z:644.4355,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:740.6935,y:376.9354,z:740.6935,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:740.6935,y:343.8709,z:578.3065,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:542.3065,y:343.8709,z:446.0484,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:446.0484,y:343.8709,z:446.0484,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:410.0484,y:509.1935,z:244.7257,q:509.1935,radius:36, img:'images/wire.png',componentName:'n/a'},{x:244.7257,y:509.1935,z:244.7257,q:409.9999,radius:36, img:'images/wire.png',componentName:'n/a'},{x:509.2419,y:575.3225,z:244.7257,q:575.3225,radius:36, img:'images/wire.png',componentName:'n/a'},{x:244.7257,y:575.3225,z:244.7257,q:409.9999,radius:36, img:'images/wire.png',componentName:'n/a'},{x:608.4355,y:443.0644,z:545.2419,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:545.2419,y:443.0644,z:545.2419,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:545.2419,y:443.0644,z:545.2419,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:545.2419,y:443.0644,z:545.2419,q:575.3225,radius:36, img:'images/wire.png',componentName:'n/a'},{x:446.0484,y:509.1935,z:509.2419,q:509.1935,radius:36, img:'images/wire.png',componentName:'n/a'},{x:509.2419,y:509.1935,z:509.2419,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:509.2419,y:443.0644,z:379.9193,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:379.9193,y:443.0644,z:379.9193,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:280.7257,y:409.9999,z:280.7257,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:280.7257,y:443.0644,z:343.9193,q:443.0644,radius:36, img:'images/wire.png',componentName:'n/a'},{x:280.7257,y:409.9999,z:280.7257,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:280.7257,y:343.8709,z:410.0484,q:343.8709,radius:36, img:'images/wire.png',componentName:'n/a'},{x:379.9193,y:277.7419,z:476.1774,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:476.1774,y:277.7419,z:476.1774,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:343.9193,y:277.7419,z:244.7257,q:277.7419,radius:36, img:'images/wire.png',componentName:'n/a'},{x:244.7257,y:277.7419,z:244.7257,q:409.9999,radius:36, img:'images/wire.png',componentName:'n/a'},{x:361.9193,y:277.7419,radius:36, rotate:0, img:'images/ampermeter.png' , componentName: '<p><span class="field-title">Measured current </span>-3.702 [A] </p>'},{x:379.9193,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:343.9193,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:494.1774,y:277.7419,radius:36, rotate:0, img:'images/resistor.png' , componentName: '<p><span class="field-title">Resistance </span>1 [Ohm] </p>'},{x:512.1774,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:476.1774,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:626.4355,y:277.7419,radius:36, rotate:0, img:'images/accumulator.png' , componentName: '<p><span class="field-title">Voltage </span>30 [V] </p>'},{x:644.4355,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:608.4355,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:758.6935,y:277.7419,radius:36, rotate:0, img:'images/ampermeter.png' , componentName: '<p><span class="field-title">Measured current </span>-3.702 [A] </p>'},{x:776.6935,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:740.6935,y:277.7419,radius:7, img:'images/connector.png',componentName:'n/a'},{x:758.6935,y:376.9354,radius:36, rotate:0, img:'images/resistor.png' , componentName: '<p><span class="field-title">Resistance </span>1 [Ohm] </p>'},{x:776.6935,y:376.9354,radius:7, img:'images/connector.png',componentName:'n/a'},{x:740.6935,y:376.9354,radius:7, img:'images/connector.png',componentName:'n/a'},{x:626.4355,y:443.0644,radius:36, rotate:0, img:'images/ampermeter.png' , componentName: '<p><span class="field-title">Measured current </span>2.183 [A] </p>'},{x:644.4355,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:608.4355,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:560.3065,y:343.8709,radius:36, rotate:0, img:'images/bulb.png' , componentName: '<p><span class="field-title">GUI Lamp </span>Nothing to show [N/A] </p>'},{x:542.3065,y:343.8709,radius:7, img:'images/connector.png',componentName:'n/a'},{x:578.3065,y:343.8709,radius:7, img:'images/connector.png',componentName:'n/a'},{x:428.0484,y:343.8709,radius:36, rotate:0, img:'images/resistor.png' , componentName: '<p><span class="field-title">Resistance </span>5 [Ohm] </p>'},{x:446.0484,y:343.8709,radius:7, img:'images/connector.png',componentName:'n/a'},{x:410.0484,y:343.8709,radius:7, img:'images/connector.png',componentName:'n/a'},{x:361.9193,y:443.0644,radius:36, rotate:0, img:'images/bulb.png' , componentName: '<p><span class="field-title">GUI Lamp </span>Nothing to show [N/A] </p>'},{x:343.9193,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:379.9193,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:527.2419,y:443.0644,radius:36, rotate:0, img:'images/resistor.png' , componentName: '<p><span class="field-title">Resistance </span>1 [Ohm] </p>'},{x:545.2419,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:509.2419,y:443.0644,radius:7, img:'images/connector.png',componentName:'n/a'},{x:428.0484,y:509.1935,radius:36, rotate:0, img:'images/voltmeter.png' , componentName: '<p><span class="field-title">Measured Voltage </span>20.316 [V] </p>'},{x:446.0484,y:509.1935,radius:7, img:'images/connector.png',componentName:'n/a'},{x:410.0484,y:509.1935,radius:7, img:'images/connector.png',componentName:'n/a'},{x:527.2419,y:575.3225,radius:36, rotate:0, img:'images/voltmeter.png' , componentName: '<p><span class="field-title">Measured Voltage </span>22.499 [V] </p>'},{x:545.2419,y:575.3225,radius:7, img:'images/connector.png',componentName:'n/a'},{x:509.2419,y:575.3225,radius:7, img:'images/connector.png',componentName:'n/a'},{x:262.7257,y:409.9999,radius:36, rotate:0, img:'images/resistor.png' , componentName: '<p><span class="field-title">Resistance </span>1 [Ohm] </p>'},{x:280.7257,y:409.9999,radius:7, img:'images/connector.png',componentName:'n/a'},{x:244.7257,y:409.9999,radius:7, img:'images/connector.png',componentName:'n/a'},];

    // Padding for circuit components
    const circuitComponentPadding = 40;

    // Get the key coordinates of the circuit
    const circuitRectangle = {};
    circuitRectangle.left = Math.min.apply(null, hotspots.map((h) => {
        if (Object.prototype.hasOwnProperty.call(h, 'z') && h.z < h.x) {
            return h.z;
        }
        return h.x;
    })) - circuitComponentPadding;

    circuitRectangle.top = Math.min.apply(null, hotspots.map((h) => {
        if (Object.prototype.hasOwnProperty.call(h, 'q') && h.q < h.y) {
            return h.q;
        }
        return h.y;
    })) - circuitComponentPadding;

    circuitRectangle.right = Math.max.apply(null, hotspots.map((h) => {
        if (Object.prototype.hasOwnProperty.call(h, 'z') && h.z > h.x) {
            return h.z;
        }
        return h.x;
    })) + circuitComponentPadding;

    circuitRectangle.bottom = Math.max.apply(null, hotspots.map((h) => {
        if (Object.prototype.hasOwnProperty.call(h, 'q') && h.q > h.y) {
            return h.q;
        }
        return h.y;
    })) + circuitComponentPadding;

    // Get middle coordinates for the canvas
    circuitRectangle.middle = {};
    circuitRectangle.middle.x = (circuitRectangle.right - circuitRectangle.left) / 2;
    circuitRectangle.middle.y = (circuitRectangle.bottom - circuitRectangle.top) / 2;

    // Set canvas to match the exported circuit
    ctx.canvas.width = circuitRectangle.right - circuitRectangle.left;
    ctx.canvas.height = circuitRectangle.bottom - circuitRectangle.top;

    // Get the middle coordinates of the canvas
    const canvasMid = {};
    canvasMid.x = Math.round($canvas.width / 2);
    canvasMid.y = Math.round($canvas.height / 2);

    // --- FUNCTIONS ---
    // Draw image to the canvas
    function drawImageRot(img, x, y, width, height, deg) {
        // Convert degrees to radian
        const rad = (deg * Math.PI) / 180;

        // Set the origin to the center of the image
        ctx.translate(x, y);

        // Rotate the canvas around the origin
        ctx.rotate(rad);

        // Draw the image
        ctx.drawImage(img, width / -2, height / -2, width, height);

        // Reset the canvas
        ctx.rotate(rad * (-1));

        //
        ctx.translate(-x, -y);
    }

    // Draw the canvas elements
    function draw() {
        for (let i = 0; i < hotspots.length; i += 1) {
            const h = hotspots[i];
            if (h.img.indexOf('wire.png') > 0) {
                ctx.beginPath();
                ctx.moveTo(h.x, h.y);
                ctx.lineTo(h.z, h.q);
                ctx.strokeStyle = 'black';
                ctx.closePath();
                ctx.stroke();
            } else if (h.img.indexOf('connector.png') > 0) {
                ctx.strokeStyle = 'black';
                ctx.beginPath();
                ctx.arc(h.x, h.y, h.radius, 0, 2 * Math.PI, false);
                ctx.closePath();
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'yellow';
                ctx.stroke();
            } else {
                ctx.strokeStyle = 'black';
                ctx.beginPath();
                ctx.arc(h.x, h.y, h.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.stroke();
                const imageObj = new Image();
                imageObj.src = h.img;
                drawImageRot(imageObj, h.x, h.y, imageObj.width / 2, imageObj.height / 2, h.rotate);
                ctx.stroke();
            }
        }
    }

    // Write information about component
    function handleMouseMove(e) {
        // Tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();

        /*
        getBoundingClientRect(): Returns the coordinates and size of the visible
        part of element - after resizing with CSS.
        - Take mouse position;
        - Take left and top coordinates from them;
        - Divide by visible width and height to get relative coordinates;
        - Multiply by canvas width and height (the defined ones);
        */
        const canvasRectangle = $canvas.getBoundingClientRect();
        const mouseX = (
            (e.clientX - canvasRectangle.left) / (canvasRectangle.width)
        ) * $canvas.width;
        const mouseY = (
            (e.clientY - canvasRectangle.top) / (canvasRectangle.height)
        ) * $canvas.height;

        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        draw();

        // Get data from Canvas and write it to the summary div
        let html = '';
        for (let i = 0; i < hotspots.length; i += 1) {
            const h = hotspots[i];
            const dx = mouseX - h.x;
            const dy = mouseY - h.y;
            if ((dx * dx) + (dy * dy) < h.radius * h.radius) {
                if (h.img.indexOf('connector.png') === -1 && h.img.indexOf('wire.png') === -1) {
                    html += h.componentName;
                }
            }
        }
        $summaryWrapper.innerHTML = html;
    }

    // Run on mouse hover on canvas - write out information
    $canvas.onmousemove = ((e) => {
        handleMouseMove(e);
    });

    // --- RUN ON INIT ---
    // Move the circuit components to fit the canvas
    hotspots = hotspots.map((hotspot) => {
        const newHotspot = Object.assign({}, hotspot);

        newHotspot.x -= circuitRectangle.left;
        newHotspot.y -= circuitRectangle.top;
        newHotspot.x = (((newHotspot.x - circuitRectangle.middle.x)
            / circuitRectangle.middle.x) * canvasMid.x) + canvasMid.x;
        newHotspot.y = (((newHotspot.y - circuitRectangle.middle.y)
            / circuitRectangle.middle.y) * canvasMid.y) + canvasMid.y;

        // Wires also have an ending
        if (Object.prototype.hasOwnProperty.call(newHotspot, 'z')) {
            newHotspot.z -= circuitRectangle.left;
            newHotspot.q -= circuitRectangle.top;
            newHotspot.z = (((newHotspot.z - circuitRectangle.middle.x)
                / circuitRectangle.middle.x) * canvasMid.x) + canvasMid.x;
            newHotspot.q = (((newHotspot.q - circuitRectangle.middle.y)
                / circuitRectangle.middle.y) * canvasMid.y) + canvasMid.y;
        }
        return newHotspot;
    });
    draw();
}());

const footer = (function init() {
    const $footer = document.getElementById('footer');
}());
