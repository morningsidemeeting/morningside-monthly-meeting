import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/about";
import Seo from "../../components/seo";

const QuakersPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="About Quakers" />
    <Nav />
    <section>
      <h2>A Brief History of the Quakers</h2>
      <p>
        The term “quakerism” is believed to be a term of derision given to
        17th-century Friends because they “quaked” before the Spirit. Like many
        religious groups, they were persecuted because they rejected the
        standard structures of the established church and forms of worship.
      </p>
      <p>
        George Fox and other important early Friends, including Margaret Fell
        (who would marry Fox) and James Nayler, believed that a priestly class,
        vestments and religious symbols stood in the way of true worship.
        Referring to John 15:15, early Quakers saw themselves as “friends” to
        that of God in all.
      </p>
      <p>
        The seminal Quaker writing from this period is the Journal or
        <a href="https://www.ccel.org/ccel/fox_g/autobio.html">
          Autobiography of George Fox
        </a>
        , which describes the spiritual journey of a young man who, failing to
        discover answers in the existing (state) religion, found solace in
        silent worship, replacing theological questions with personal experience
        and continuing revelation.
      </p>
      <p>
        18th century Friends were led to see the inherent contradiction between
        the freedom of the Spirit and the ownership of human beings, and to
        begin questioning all moral argumens for slavery. Leaders like John
        Woolman, who, in{" "}
        <a href="http://www.ccel.org/ccel/woolman/journal.html">
          The Journal of John Woolman
        </a>{" "}
        (1774), recounted his 40-year campaign to persuade slave-owning Friends
        to free their slaves, emphasized that the fact that God was within us
        all was inconsistent with the ownership of slaves. Woolman also saw
        dress as a socioeconomic statement. He refused to wear cotton and
        eliminated collars and dyed fabric from his wardrobe, not in order to
        create a Quaker aesthetic, but because cotton and buttons and dyes were
        produced with slave labor and wearing those products validated the
        system of slavery.
      </p>
      <p>
        In the 19th century Friends experienced a period of Quietism in which
        they ceased any activity in the political arena and struggled to
        establish a shared identity. In the end Friends split into two sects
        largely along economic and social lines. That schism between evangelical
        and non-evangelical Friends continues to this day.
      </p>
      <p>
        In the 20th Century writers such as Rufus Jones reinvigorated Quakerism
        by framing it as simultaneously mystical and practical. Jones was one of
        the founders, in 1917 of the{" "}
        <a href="http://afsc.org/">American Friends Service Committee (AFSC)</a>
        , to provide alternative service programs for conscientious objectors in
        World War I. His combination of mysticism and service has come to define
        Quakerism today. An excellent collection of digitized works of Jones and
        other Quakers is available at from the{" "}
        <a href="https://www.hathitrust.org/">Hathi Trust Digital Library</a>.
        In 1943, a group of Friends founded the{" "}
        <a href="http://fcnl.org/">
          Friends Committee on National Legislation (FCNL)
        </a>{" "}
        in order to lobby for changes in national legislation to make the
        nation's laws more consistent with Quaker testimonies and values,
        especially the peace testimony. FCNL is a “nonpartisan, multi-issue
        advocacy that connects historic Quaker testimonies on peace, equality,
        simplicity, and truth with peace and social justice issues.”
      </p>
    </section>
    <section>
      <h2>Further Information on Quaker History and Practice</h2>
      <p>
        New York Yearly meeting publishes a manual of faith and practice that
        provides Monthly meetings with guidance when making decisions of
        process.{" "}
        <a href="https://www.nyym.org/faith-and-practice">Faith and Practice</a>{" "}
        is not a rulebook; it does not prescribe rules of governance. Instead it
        provides prayerful reflections about the most basic questions of
        conducting Worship and Business.
      </p>
      <p>
        <a href="http://www.quakerinfo.org/resources/books">
          Quaker Infomation Service
        </a>{" "}
        of Earlham College provides an excellent list of books about the history
        of Friends.
      </p>
      <p>
        <a href="https://quaker.org/">Quaker.org</a> is an excellent site for
        all things Quaker. Maintained by Russell Nelson.
      </p>
      <p>
        <a href="https://quakerbooks.org/">Quakerbooks.org</a> is a source of
        works by and about Quakers, including the Pendle Hill Pamphlets.
      </p>
      <p>
        The Morningside Library maintains a small lending library on the
        premises of Morningside Meeting's meeting room. The librarian would be
        happy to introduce you to the collection.
      </p>
    </section>
  </CoreLayout>
);
export default QuakersPage;
