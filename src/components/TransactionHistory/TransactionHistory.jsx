
import s from "./TransactionHistory.module.css"; 
   import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
      <table className={clsx(s.transaction_history, s.container)}>
      <thead>
        <tr className={s.tr_title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tr_list} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory