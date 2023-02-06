<script>
    export let value = undefined;
    let forInput;
    export { forInput as for };
</script>

<label {forInput} class="block font-medium text-sm text-gray-700 dark:text-gray-300">
    {#if value}
        <span>{value}</span>
    {:else}
        <span><slot /></span>
    {/if}
</label>
