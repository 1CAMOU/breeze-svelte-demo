<script>
    import { Link } from "@inertiajs/svelte";
    import { route } from '@/ziggy';
</script>

<h1>Works!</h1>

<Link href={route("test")}>
    Go to Test
</Link>
