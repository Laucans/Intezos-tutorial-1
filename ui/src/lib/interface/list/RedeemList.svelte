<script>
  import CustomList  from './base/CustomList.svelte';
  import ConfirmationModal from '../../modal/ConfirmationModal.svelte';

  let showRedeemModal = false;


  function handleModalRedeemClosed() {
    showRedeemModal = false;
  }

  function redeem() {

  }


  const data = [
    {
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },
    {
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services Payment for servicessssssss",
    }
  ];

</script>

<style>

</style>

<div>
  <CustomList data={data} on:listButtonCliked={() => showRedeemModal=true}  buttonLabel="Redeem"/>
  <ConfirmationModal isOpen={showRedeemModal} on:modalClosed={handleModalRedeemClosed} on:modalConfirmed={redeem} modalTitle="Redeem" modalText="You will redeem the transfer sent to <address> for <motif> (<amount>xtz). Are you sure ?" />
</div>
