<script>
  import { Content, Grid } from "carbon-components-svelte";
  import TopNav from "../components/TopNav.svelte";
  import Theme from "../components/Theme.svelte";
</script>

<Theme persist theme="g10">
  <TopNav />
  <Content style="background: none; padding: 1rem">
    <Grid>
      <slot />
    </Grid>
  </Content>
</Theme>
