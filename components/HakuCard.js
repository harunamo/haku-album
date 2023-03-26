import { Image, Text, Badge, Group, Box } from "@mantine/core";

export default function HakuCard({ props }) {
  return (
    <Box maw={400} mx="auto">
      <Image radius="md" src={props.image_path} alt="Haku1" />
      <Group position="left" mt="md" mb="xs">
        <Badge color="blue" variant="outline" size="md">
          {props.place}
        </Badge>
        <Text weight={400}>{props.description}</Text>
      </Group>
    </Box>
  );
}
