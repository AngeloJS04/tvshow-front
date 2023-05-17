import { Grid, Input, Navbar, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setTvShows } from "../../redux/slices/tvshow.slice";
const Header = () => {
    const dispatch = useDispatch()
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    const [search, setSearch] = React.useState('')
    const apiUrl = `https://www.episodate.com/api/search?q=${search}`;
    const { data, error } = useFetch(apiUrl);

    useEffect(() => {
        if (!data || error) return
        dispatch(setTvShows(data))
    }, [data])

    return (
        <div>
            <Navbar isBordered variant={"floating"}>
                <Navbar.Brand>
                    <Image src='https://static.episodate.com/logo-white.svg' width={100} height={100} alt="logo" />
                </Navbar.Brand>
                <Navbar.Content>
                    <Grid>
                        <Input
                            clearable
                            contentRightStyling={false}
                            placeholder="Search a tv show..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Grid>
                    <Switch
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    />
                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default Header