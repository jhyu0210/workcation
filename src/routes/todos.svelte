<script>
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
  
      if (res.ok) {
        return data;
      } else {
        throw new Error(data);
      }
    }
  </script>
  
  {#await fetchData()}
    <p>loading</p>
  {:then items}
    {#each items as item}
      <li>{item.id}. {item.title}</li>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}