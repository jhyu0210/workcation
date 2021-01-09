<script context="module">
    import commerce from "../../lib/commerce";
    export async function preload(){
      const merchant = await commerce.merchants.about();
      const {data: categories } = await commerce.categories.list();
      const {data: products } = await commerce.products.list();
      return {
        merchant,
        categories,
        products
      }
    }
</script>
<script>
  export let merchant;
  export let products;
  export let categories;
</script>
<div class="mx-4 max-w-4xl container flex flex-col ">
  <div class="text-center bg-purple-300">
    <h1 class="font-bold text-xl">{merchant.business_name}</h1>
  </div>
  <div class="flex justify-around">
    <h3 class="font-bold text-lg bg-purple-300"><a href="/ecommerce/products">Products</a> </h3>
    <h3 class="font-bold text-lg bg-gray-300"><a href="/ecommerce/categories">Categories</a></h3>
  </div>

</div>
<div class="flex justify-around mx-4 max-w-4xl">
  
  <!-- <h1><a href="/ecommerce/products">Products</a> </h1> -->
  <ul class="bg-purple-300">
    {#each products as product}
    <li>
      <a rel="prefectch" href="ecommerce/products/{product.permalink}">{product.name}</a>
    </li>
    {/each}
  </ul>
  <ul class="bg-gray-300">
    {#each categories as category}
    <li>
      <a rel="prefectch" href="ecommerce/categories/{category.slug}">{category.name}</a>
    </li>
    {/each}
  </ul>
</div>
