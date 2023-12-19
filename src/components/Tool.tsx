export type ToolType = {
  link: string
  title: string
  description: string
  tags: string[]
}

type Props = {
  tool: ToolType
}

export function Tool({ tool }: Props) {
    return (
      <div className="tool">
        <h3><a href={tool.link}>{tool.title}</a></h3>
        <p>{tool.description}</p>
        <div className="tags">
          {tool.tags.map(tag => <span key={tag}>#{tag}</span>)}
        </div>
      </div>
    );
  }