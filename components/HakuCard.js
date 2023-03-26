import { Image, Text, Badge, Group, Box } from "@mantine/core";

export default function HakuCard({ prop }) {
  return (
    <Box maw={400} mx="auto">
      <Image radius="md" src={prop.image_path} alt="Haku1" />
      <Group position="left" mt="md" mb="xs">
        <Badge color="blue" variant="outline" size="md">
          {prop.place}
        </Badge>
        <Text weight={400}>{prop.description}</Text>
      </Group>
    </Box>
  );
}
