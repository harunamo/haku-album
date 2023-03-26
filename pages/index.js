import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAllProps } from "../lib/retriever";
import HakuCard from "../components/HakuCard";
import { createStyles, Container, Text, rem, Grid } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    backgroundImage: "url(/hero.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: rem(832),
  },

  heroInner: {
    position: "relative",
    paddingTop: rem(300),
    paddingBottom: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },

  footer: {
    marginTop: rem(18),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.blue[4],
  },

  footerInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const initial_haku_props = getAllProps();
  const [haku_props, setHakuProps] = useState(initial_haku_props);

  const { register, handleSubmit } = useForm();

  const onSubmit = (form_input) => {
    let _haku_props = [];
    if (form_input.place === "全部") {
      setHakuProps(initial_haku_props);
    } else {
      initial_haku_props.map((haku_prop) => {
        if (haku_prop.place === form_input.place) {
          _haku_props.push(haku_prop);
        }
      });
      setHakuProps(_haku_props);
    }
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.heroInner}>
          <h1 className={classes.title}>
            <Text component="span" variant="light" inherit color="white">
              Haku’s Album
            </Text>
          </h1>

          <Text className={classes.description} color="white">
            はくとの大切な思い出を集めました。
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                {...register("place")}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="場所（全部、静岡、伊豆、吉田、焼津、藤枝から選んでください。）"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                検索
              </button>
            </div>
          </form>
        </Container>
      </div>

      <Grid className="mt-20 mx-10">
        {haku_props.map((haku_prop) => (
          <HakuCard key={haku_prop.prop_id} prop={haku_prop}></HakuCard>
        ))}
      </Grid>

      <div className={classes.footer}>
        <Container className={classes.footerInner}>
          <Text weight={400} align="center" color="white">
            ©Haaakochan
          </Text>
        </Container>
      </div>
    </div>
  );
}
