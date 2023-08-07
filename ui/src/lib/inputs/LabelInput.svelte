<script>
  export let label = '';
  export let placeholder = '';

  export let inputId = `input-${Math.random().toString(36).substring(2, 9)}`;
</script>

<style>
  .label-input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  label {
    font-weight: normal;
    margin-bottom: 5px;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

</style>

<div class="label-input-container">
  <label for={inputId}>{label} :</label>
  <input id={inputId} type="text" placeholder={placeholder} />
</div>
