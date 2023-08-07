<script>
  import CustomList  from './base/CustomList.svelte';
  import ClaimModal from '../../modal/ClaimModal.svelte';

  let showClaimModal = false;


  function handleModalClaimClosed() {
    showClaimModal = false;
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
    },{
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },{
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },{
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },{
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },{
      address: "tz1abcde...",
      amount: 10,
      date: "2023-08-06",
      reason: "Payment for services",
    },
  ];

</script>

<style>

</style>

<div>
  <CustomList data={data} on:listButtonCliked={() => showClaimModal=true} buttonLabel="Claim"/>
  <ClaimModal isOpen={showClaimModal} on:modalClaimClosed={handleModalClaimClosed}  />
</div>
