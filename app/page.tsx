import { readYamlFile } from "./features/recipeReader/functions/yamlHandler";
import TrackerHeader from "./features/trackerBuilder/components/trackerHeader/index";
import { ComponentFactory } from "./features/trackerBuilder/factory";

export default function Home() {
  let value = readYamlFile("naruto-ultimate-ninja.yaml", true);
  let array = value?.content;
  if (array === null || array === undefined) return;
  for (let i = 0; i < 8; i++) {
    ComponentFactory(array[i]);
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <section>
        <TrackerHeader
          author="Igor Mendes"
          image="https://media.retroachievements.org/Images/126564.png"
          title="Naruto Ultimate Ninja - Retro Achievement"
        />
      </section>
      <section className="flex flex-row gap-1">
        {array.map((item) => ComponentFactory(item))}
      </section>
    </main>
  );
}
