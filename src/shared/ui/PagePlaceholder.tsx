type PagePlaceholderProps = {
  title: string
  description: string
}

export function PagePlaceholder({
                                  title,
                                  description,
                                }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}
