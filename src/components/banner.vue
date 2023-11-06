<script>
</script>

<template>
    <div id="banner">
        <p>&copy; Brayan Garzón {{ new Date().getFullYear() }}</p> <!--toma eñ año actual para el copy-->
    </div>
</template>


<style scoped>
    #banner{
        
        width: 100%;
        height: 50px;
        background-color: #252525d3;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #banner p{
        margin: 0;
    }
</style>