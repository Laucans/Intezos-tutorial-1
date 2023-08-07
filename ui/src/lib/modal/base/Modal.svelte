<script>

  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  export let validateButtonLabel = "Validate";
  export let title = "Default Title";

  const dispatch = createEventDispatcher();

  function closeModal() {
    isOpen = false;
    dispatch('modalClosed');
  }

  function validateModal() {
    isOpen = false;
    dispatch('modalValidated');
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<style lang="scss">
  @import "../../../styles/settings.scss";
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  /* Styles pour le titre de la modal */
  .modal h1 {
    font-size: 1.5rem;
    margin: 0 0 15px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .modal-content {
    max-width: 99%;
    max-height: 99%;
    overflow: auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  /* Styles pour les boutons */
  .validate-button {
    padding: 8px 15px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Styles pour le bouton Close */
  .close-button {
    margin-right: 10px;
  }

  /* Styles pour les boutons dans le conteneur */
  .buttons-container {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Couleur grise avec opacité */
    z-index: 1; /* Place le filtre au-dessus de la modal */
  }
</style>

{#if isOpen}
<div class="modal" role="button" tabindex="0">
  <div class="modal-content">
    <h1>{title}</h1>

    <slot></slot>

    <div class="buttons-container">
      <button class="close-button close-button" on:click={closeModal}>
        Close
      </button>

      <button class="validate-button" on:click={validateModal}>
        {validateButtonLabel}
      </button>
    </div>
  </div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-overlay" role="button" tabindex="0" on:click={closeModal}></div>
{/if}
