<template>
    <section class="page-header-section style-1">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>{{pageName}}</h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><router-link to="/">Home</router-link></li>
                        <li class="active">{{pageName}}</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"PageHeader",
    props:["pageName"]
}
</script>