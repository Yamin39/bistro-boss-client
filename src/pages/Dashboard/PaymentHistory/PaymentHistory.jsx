import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <div>
      <SectionTitle subHeading="At a Glance!" heading="PAYMENT HISTORY"></SectionTitle>
      <h2 className="text3-xl">Total Payments: 0</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{1}</th>
              <td>${99}</td>
              <td>{"abcd"}</td>
              <td>{"done"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
