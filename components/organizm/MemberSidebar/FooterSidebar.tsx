import Image from 'next/image';

const FooterSidebar = () => {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <Image
            height={50}
            width={50}
            alt="sidebar-footer"
            src="/icon/sidebarfooter.svg"
          />
          <p className="fw-medium color-palette-1">
            Top Up &
            <br />
            Be The Winner
          </p>
        </div>
        <a
          className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
          href="#"
          role="button"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default FooterSidebar;
