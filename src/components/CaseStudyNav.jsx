import { Link } from 'react-router-dom'
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from '@/components/ui/item'

export default function CaseStudyNav({ heading, others }) {
  if (!others?.length) return null

  return (
    <nav
      className="flex flex-col gap-6"
      aria-label="Other case studies"
    >
      <h2 className="mb-4 font-serif text-lg font-medium italic text-foreground">
        {heading}
      </h2>
      <ItemGroup className="gap-4">
        {others.map((project) => (
          <Item
            key={project.slug}
            variant="outline"
            render={<Link to={`/work/${project.slug}`} />}
          >
            <ItemMedia variant="image" className="size-[6.4rem] rounded-xl">
              {project.image && (
                <img src={project.image} alt={project.title} />
              )}
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-none font-serif text-base font-medium italic text-foreground">
                {project.title}
              </ItemTitle>
              <ItemDescription className="line-clamp-none leading-[1.5]">
                {project.description}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
            <ChevronRightIcon className="size-4 text-muted-foreground" />
          </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </nav>
  )
}
