import Title from "./Title";
import TableItem from "./TableItem";

const Table = ({ titulo }) => {
  return (
    <div className="table-container">
      <Title>{titulo}</Title>
      <table className="table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <TableItem 
            titulo="ASRock Radeon RX 6600 Challenger D 8GB"
            descripcion="Tarjeta gráfica ideal para gaming 1080p. Bajo consumo y buena relación calidad/precio."
            precio={270000}
            imagen="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop"
          />
          <TableItem 
            titulo="MSI Radeon RX 6750 XT MECH 2X 12GB"
            descripcion="GPU potente para gaming en 1440p. Buena ventilación y diseño robusto."
            precio={400000}
            imagen="https://asset.msi.com/resize/image/global/product/product_165217408191ce22acc33b7649c9fb0f398959aeec.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
          />
          <TableItem 
            titulo="Gigabyte GeForce RTX 4060 Eagle OC 8GB"
            descripcion="NVIDIA de nueva generación. DLSS 3 y buena eficiencia para juegos modernos."
            precio={360000}
            imagen="https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=500&auto=format&fit=crop"
          />
          <TableItem  
            titulo="PowerColor Radeon RX 6700 XT Hellhound 12GB"
            descripcion="Rendimiento sólido para gaming 1440p y multitarea con buena refrigeración."
            precio={430000}
            imagen="https://http2.mlstatic.com/D_NQ_NP_801402-MLA47176797122_082021-O.webp"
          />
        </tbody>
      </table>
    </div>
  );
};


export default Table;