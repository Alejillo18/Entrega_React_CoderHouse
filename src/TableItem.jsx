import Title from "./Title";

function TableItem({ titulo, descripcion, precio, imagen }) {
  return (
    <tr>
      <td>
        <img src={imagen} alt={titulo} style={{ width: "80px", height: "auto" }} />
      </td>
      <td><Title>{titulo}</Title></td>
      <td>{descripcion}</td>
      <td>${precio.toLocaleString()}</td>
    </tr>
  );
}

export default TableItem;
