import ParticleBackground from '@/components/ParticleBackground'
import WorkCard from '@/components/WorkCard'

export default function Home() {
  return (
    <>
      <ParticleBackground />

      <div className="mesh-layer">
        <div className="mesh-blob blob1" />
        <div className="mesh-blob blob2" />
        <div className="mesh-blob blob3" />
        <div className="mesh-blob blob4" />
      </div>

      <div className="site">
        <nav>
          <div className="nav-logo">Fugashi</div>
          <ul className="nav-links">
            <li><a href="#works">Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#links">Links</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section className="hero">
          <p className="hero-eyebrow">Independent Creator — Portfolio</p>
          <h1 className="hero-name">
            <span className="line">あなたの中にある</span>
            <span className="line">答えを、</span>
            <span className="line">かたちにする。</span>
            <span className="line-dim">— Products by Fugashi</span>
          </h1>
          <p className="hero-copy">
            好きなゲーム、読んだ本、今日の気分。<br />
            <strong>蓄積されたデータには、自分でも気づいていないパターンがある。</strong><br />
            そのパターンを分析し、可視化するプロダクトを作り続けています。
          </p>
          <div className="hero-tags">
            <span className="hero-tag">React / Next.js</span>
            <span className="hero-tag">AI / LLM</span>
            <span className="hero-tag">個人開発</span>
          </div>
        </section>

        <section className="section" id="works">
          <p className="section-label">Works</p>
          <div className="works-grid">
            <WorkCard
              num="01"
              status="live"
              title="Priloa"
              description="できたことを記録して応援し合うサービス。小さな達成をシェアし、見知らぬ誰かから背中を押してもらえる。"
              colorIndex={1}
              wide
              href="https://priloa.com/"
            />
            <WorkCard
              num="02"
              status="live"
              title="GamersDNA"
              description="Steamライブラリを読み込んで、あなたのゲームの傾向を分析・可視化する。"
              colorIndex={2}
              href="https://gamersdna.vercel.app/"
            />
            <WorkCard
              num="03"
              status="live"
              title="BooksDNA"
              description="読んだ本を登録するとAIが傾向を分析。次に読むべき一冊も提案する。"
              colorIndex={3}
              href="https://booksdna.vercel.app/"
            />
            <WorkCard
              num="04"
              status="dev"
              title="HueLog"
              description="日記を色でラベル付けして、同じ色の感情を持つ他者の投稿と出会えるサービス。"
              colorIndex={4}
              href="https://huelog.vercel.app/"
            />
            <WorkCard
              num="05"
              status="live"
              title="Tsudzuki"
              description="積み重ねを記録・可視化するサービス。"
              colorIndex={6}
              href="https://tsudzuki.vercel.app/"
            />
            <WorkCard
              num="06"
              status="beta"
              title="Anivell"
              description="AIがギフト選びをサポート。相手の趣味・関係性・予算をもとに、ぴったりのプレゼントを提案する。"
              colorIndex={5}
              wide
              href="https://anivell.vercel.app/"
            />
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">About</p>
          <div className="about-inner">
            <div>
              <p className="about-text">「人の内側を、かたちにする」をテーマに、感情・趣味・記録を可視化するプロダクトを個人開発しています。</p>
              <p className="about-text">データは嘘をつかない。あなたが思っている自分と、実際の行動データが示す自分——その差分の中に、本当の答えがある。</p>
            </div>
            <div>
              <p className="skills-title">Tech stack</p>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">AI / LLM</span>
                <span className="skill-tag">個人開発</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="links">
          <p className="section-label">Links</p>
          <div className="links-list">
            <a className="link-item" href="https://x.com/fugashina" target="_blank" rel="noopener noreferrer">
              <span className="link-platform">X (Twitter)</span>
              <span className="link-handle">@fugashina</span>
              <span className="link-arrow">↗</span>
            </a>
            <a className="link-item" href="https://www.twitch.tv/fugashina" target="_blank" rel="noopener noreferrer">
              <span className="link-platform">Twitch</span>
              <span className="link-handle">fugashina</span>
              <span className="link-arrow">↗</span>
            </a>
          </div>
        </section>

        <section className="section" id="contact">
          <p className="section-label">Contact</p>
          <div className="contact-inner">
            <p className="contact-cta">
              何か<em>一緒に</em><br />
              作りませんか。
            </p>
            <a className="contact-btn" href="mailto:fugashi@gmail.com">
              fugashi@gmail.com
            </a>
          </div>
        </section>

        <footer>
          <p>© 2025 Fugashi — All rights reserved</p>
        </footer>
      </div>
    </>
  )
}
