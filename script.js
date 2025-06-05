<script>
    const cursor = document.getElementById("custom-cursor");
    document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    });
</script>
