import Link from "next/link";
import { biz, gym, combat } from "./content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid grid--3">
          <div>
            <h4>Ironworks Gym</h4>
            <p>
              {gym.address}
              <br />
              {gym.city}
            </p>
            <p>
              <a href={biz.phoneHref}>{biz.phone}</a>
              <br />
              <a href={`mailto:${biz.email}`}>{biz.email}</a>
            </p>
            <p>24 hour access for members.</p>
          </div>

          <div>
            <h4>Combat Training Center</h4>
            <p>
              {combat.address}
              <br />
              {combat.city}
            </p>
            <p>
              <a href={biz.phoneHref}>{biz.phone}</a>
            </p>
            <p>{combat.lineage}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/amenities">Amenities</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/combat">Combat Training Center</Link></li>
              <li><Link href="/combat/schedule">Class Schedule</Link></li>
              <li><Link href="/combat/coaches">Coaches</Link></li>
              <li><Link href="/shop">The Muscle Shop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            Copyright &copy; {new Date().getFullYear()} Ironworks Gym, Grass Valley, CA.
            All rights reserved.
          </span>
          <span>Two facilities. One Ironworks.</span>
        </div>
      </div>
    </footer>
  );
}
