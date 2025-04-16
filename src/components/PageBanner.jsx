export default function PageBanner({ title, description }) {
    return (
      <div className="bg-primary text-light py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    )
  }