export default function CatalogSyncPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Catalog Sync</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Imports</p>
            <h2>Catalog synchronization</h2>
          </div>
        </div>

        <div className="sync-box">
          <div className="sync-item">
            <strong>Afnan Egypt</strong>
            <span>Last sync: 2 hours ago</span>
            <button className="mini-action">Sync now</button>
          </div>
          <div className="sync-item">
            <strong>Emarati Scents</strong>
            <span>Last sync: 5 hours ago</span>
            <button className="mini-action">Sync now</button>
          </div>
          <div className="sync-item">
            <strong>Élan Boutique</strong>
            <span>Waiting for approval</span>
            <button className="mini-action">Review</button>
          </div>
        </div>
      </section>
    </main>
  );
}
