
import s from "./TransactionHistory.module.css"; 
   import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
      <table className={clsx(s.transaction_history, s.container)}>
      <thead>
        <tr className={s.tr_title}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tr_list} key={id}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory