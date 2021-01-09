<script context="module">
    import commerce from "../../../lib/commerce";
    export async function preload(){
        const {data: categories} = await commerce.categories.list();
        return {categories};
    }
</script>

<script>
    export let categories;
</script>

<h1>Categoires</h1>

<ul>
    {#each categories as category}
      <li>
        <a href="ecommerce/categories/{category.slug}" rel="prefetch">
          {category.name}
        </a>
      </li>
    {/each}
</ul>