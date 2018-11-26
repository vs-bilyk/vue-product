<template>
  <div>
    <h1>{{ name }}</h1>
    <Greeting />
  </div>
</template>


<script>
    import Greeting from './components/Greeting';

    console.log('Greeting', Greeting)
    export default {
        data: () => ({
            name: 'Webpack',
        }),
        components: {
            Greeting,
        },
    };
</script>